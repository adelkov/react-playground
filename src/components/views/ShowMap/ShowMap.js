/*global google*/

import React, {Component} from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from "google-maps-react";
import Loader from "../../common/Loader/Loader";
import MapControll from "./MapControll/MapControll";
import PlaceDetail from "./PlaceDetail/PlaceDetail";
import {compose} from "redux";
import withAuth from "../../../HOCs/withAuth";

class ShowMap extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selection: "",
            service: null,
            showingInfoWindow: false,
            activeMarker: {},
            center: {lat: 37.778519, lng: -122.405640},
            myPositionMarker: null,
            markers: [],
            placeDetail: {},
            isFetching: true
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showMe)
        } else {
            this.setState({
                myPositionMarker: {
                    name: "My postition",
                    lat: 47.49801,
                    lng: 19.03991
                }
            });
        }
    }

    fetchPlaces = (mapProps, map) => {
        const {google} = mapProps;
        this.setState({
            service: new google.maps.places.PlacesService(map)
        })
    };


    showMe = (position) => {
        this.setState({
            myPositionMarker: {
                name: "My postition",
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        });

        this.setState({
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    };

    onMarkerClick = (props, marker, e) => {
        this.fetchPlaceDetail(marker.id);
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    fetchPlaceDetail(id) {
        this.setState({isFeching: true});
        const request = {
            placeId: id
        };

        this.state.service.getDetails(request, this.fetchDetailcallback);

    }

    fetchDetailcallback = (place, status) => {
        this.setState({
            placeDetail: place,
            isFetching: false
        })
    };

    onMapClicked = (props, map, e) => {

        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: {}
            })
        }
    };

    onSelect = (selection) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: {}
            })
        }
        this.setState({selection: selection});
        const request = {
            location: {lat: this.state.myPositionMarker.lat, lng: this.state.myPositionMarker.lng},
            radius: '500',
            type: [selection]
        };
        this.state.service.nearbySearch(request, this.callback);
    };

    callback = (results, status) => {
        let markers = [];
        for (let result of results) {
            markers.push({
                name: result.name,
                lat: result.geometry.location.lat(),
                lng: result.geometry.location.lng(),
                id: result.place_id,
                icon: {
                    url: result.icon,
                    scaledSize: new google.maps.Size(30, 30)
                }
            });
            this.setState({markers: markers})
        }
    };


    render() {
        const style = {
            marginLeft: '10%',
            marginRight: '10%',
            width: '80%',
            height: '100%',
        };


        if (!this.state.myPositionMarker) {
            return (
                <Loader/>
            )
        }

        return (
            <div>
                <MapControll
                    onSelect={this.onSelect}
                />
                <Map
                    onReady={this.fetchPlaces}
                    onClick={this.onMapClicked}
                    google={this.props.google}
                    style={style}
                    zoom={16}
                    center={this.state.center}
                >
                    {this.state.myPositionMarker && (
                        <Marker
                            position={{lat: this.state.myPositionMarker.lat, lng: this.state.myPositionMarker.lng}}
                            name={this.state.myPositionMarker.name}
                            icon={{
                                url: "http://pluspng.com/img-png/you-are-here-png-hd-you-are-here-icon-512.png",
                                scaledSize: new google.maps.Size(50, 50)
                            }}
                        />
                    )}

                    {this.state.markers.map(marker => {
                        return (
                            <Marker
                                id={marker.id}
                                icon={marker.icon}
                                key={marker.id}
                                onClick={this.onMarkerClick}
                                position={{lat: marker.lat, lng: marker.lng}}
                                name={marker.name}
                            />
                        )
                    })}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <PlaceDetail isFetching={this.state.isFetching} place={this.state.placeDetail}/>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default compose(
    GoogleApiWrapper({
        apiKey: "AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA",
        LoadingContainer: Loader
    }),
    withAuth
)(ShowMap)
