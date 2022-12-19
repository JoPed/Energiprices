import React, { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/Title';
import Error from '../components/Error';
import Loader from '../components/Loader';

import { useGetData } from '../hooks/useGetData';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title as ChartTitle, Tooltip, Legend } from 'chart.js';

import DataListInput from 'react-datalist-input';
import '../scss/React-datalist.scss';

ChartJS.register( CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend );


const Energipriser = () => {

    const { error, loading, data, getData } = useGetData();

    const [ priceArea, setPriceArea ] = useState( '' )

    const [ startDate, setStartDate ] = useState( '' );

    const [ limitHours, setLimitHours ] = useState();

    const [ chartData, setChartData ] = useState( {} );


    // labels der bliver brugt på x-aksen
    const [ labels, setLabels ] = useState();

    // prisområnder fra https://www.energidataservice.dk/tso-electricity/Elspotprices
    const priceAreaOptions = [
        {
            id: 'dk1',
            value: 'dk1'
        },
        {
            id: 'dk2',
            value: 'dk2'
        }
    ]

    // how much data to recieve from the api
    const limitHoursData = [
        {
            id: 'limitOpt1',
            hourValue: 24,
            name: '24 timer'
        },
        {
            id: 'limitOpt2',
            hourValue: 48,
            name: '48 timer'
        },
        {
            id: 'limitOpt3',
            hourValue: 72,
            name: '72 timer'
        }

    ]

    // styling af tooltip (den der kommer frem ved at hover over en søjle i diagrammet)
    const tooltip = {
        callbacks: {
            title: function ( chart ) {
                const date = new Date( data.records[ chart[ 0 ].dataIndex ].HourDK );
                const year = date.toLocaleString( 'da-dk', { year: 'numeric' } );
                const month = date.toLocaleString( 'da-dk', { month: '2-digit' } );
                const day = date.toLocaleString( 'da-dk', { day: '2-digit' } );
                return 'D. ' + day.replace( '.', '/' ) + month + ' ' + year;
            },
            label: ( { label, formattedValue } ) => `Kl. ${ label } 
            DKK ${ formattedValue }`
        },

    }

    /* styling af diagram
     bliver brugt ved <Bar /> elementet*/
    const options = {
        responsive: true,
        plugins: {
            tooltip,
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'DKK pr. kwh'
                },

            },
            x: {
                title: {
                    display: true,
                    text: 'Tidspunkter - dagens dato'
                },
                grid: {
                    display: false
                },
            }
        }
    };


    // when pressing the button, send the request
    const handleSubmit = ( e ) => {
        e.preventDefault();

        getData( `https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=${ startDate }&filter=%7B%22PriceArea%22:[%22${ priceArea }%22]%7D&sort=HourUTC%20ASC&timezone=dk&limit=${ limitHours }` )
    }

    // fill out the label array, with data (but only when there is data)
    useEffect( () => {

        if ( data ) {
            setLabels( data.records.map( h => (
                new Date( h.HourDK ).toLocaleTimeString( 'da-dk', { hour: '2-digit' } )
            ) ) )
        }

    }, [ data ] )

    useEffect( () => {

        /* when ever labels state change reset the chartdata 
        f.eks. if the user changes amount of hours to limit*/
        setChartData( {
            labels,
            datasets: [
                {
                    label: 'Energipriser (DKK) de seneste 24 timer',
                    data: labels?.map( ( l, i ) => data.records[ i ].SpotPriceDKK / 1000 ),
                    backgroundColor: '#72ac4d',
                }
            ]
        } )


    }, [ labels ] )


    return (

        <Container fluid="lg">

            <Title headline="Energi priser" />

            { error && <Error errorMessage="Noget gik galt da du hentede dataen. Prøv at genindlæse siden." /> }

            { loading && <Loader /> }

            <Row>
                <Col xs={ 12 } md={ { span: 6, offset: 3 } }>

                    <form className="form" onSubmit={ handleSubmit }>

                        <DataListInput
                            className="priceArea"
                            label="Vælg et prisområde"
                            placeholder="Prisområder"
                            filters={ [ ( items ) => items ] } //always show everything
                            onSelect={ selectedItem => setPriceArea( selectedItem.value ) }
                            items={ priceAreaOptions.map( s => ( { id: s.id, value: s.value } ) ) }
                            inputProps={ {
                                title: 'Vælg et prisområde',
                                required: true,
                                readOnly: true
                            } }
                        />

                        <label className="labels" htmlFor="datePicker">Vælg en start dato</label>
                        <input type="date" id="datePicker" className="formInput date" onChange={ ( e ) => {
                            const date = new Date( e.target.value ).toISOString().slice( 0, 16 );
                            setStartDate( date )
                        } } />

                        <DataListInput
                            className="limit"
                            label="Begrænd antal timer kun kan se adgangen"
                            placeholder={ limitHoursData[ 0 ].name }
                            filters={ [ ( items ) => items ] } //always show everything
                            onSelect={ selectedItem => setLimitHours( selectedItem.hourValue ) }
                            items={ limitHoursData.map( h => ( { id: h.id, value: h.name, hourValue: h.hourValue } ) ) }
                            inputProps={ {
                                title: 'Vælg en begrænsning',
                                required: true,
                                readOnly: true
                            } }
                        />

                        <button className="searchBtn">Søg</button>

                    </form>

                </Col>
            </Row>

            <Row>
                <Col>
                    {
                        data && labels && chartData &&

                        <Bar
                            data={ chartData }
                            options={ options }
                        />
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default Energipriser