import Cleave from "cleave.js/react";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { calculateDistance, calculateGlideSlope, calculateVerticalSpeed } from "./math";

const makeInt = (value, ifEmpty = "") =>
    parseInt(value.replace(/\s+/g, "") || ifEmpty);
const makeFloat = (value, ifEmpty = "") =>
    parseFloat(value.replace(/\s+/g, "") || ifEmpty);

const App = () => {
    const [startAltitude, setStartAltitude] = useState("");
    const [endAltitude, setEndAltitude] = useState("");
    const [startSpeed, setStartSpeed] = useState("");
    const [endSpeed, setEndSpeed] = useState("");
    const [glideSlope, setGlideSlope] = useState("3");
    const [verticalSpeed, setVerticalSpeed] = useState("");
    const [wind, setWind] = useState("0");
    const [distance, setDistance] = useState("");
    const [estimated, setEstimated] = useState("");
    const [errors, setErrors] = useState({});

    const startAltitudeChange = (e) => {
        setStartAltitude(e.target.value);
        const startAltitude = e.target.value;
        const {
            distance,
            estimated,
            verticalSpeed,
            errors,
        } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
            setVerticalSpeed(verticalSpeed.toString());
        } else {
            setDistance("");
            setEstimated("");
        }
    };

    const endAltitudeChange = (e) => {
        setEndAltitude(e.target.value);
        const endAltitude = e.target.value;
        const {
            distance,
            estimated,
            verticalSpeed,
            errors,
        } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
            setVerticalSpeed(verticalSpeed.toString());
        } else {
            setDistance("");
            setEstimated("");
        }
    };

    const startSpeedChange = (e) => {
        setStartSpeed(e.target.value);
        const startSpeed = e.target.value;
        const verticalSpeed = calculateVerticalSpeed({
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        const { distance, estimated, errors } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
        } else {
            setDistance("");
            setEstimated("");
        }

        setVerticalSpeed(verticalSpeed.toString());
    };

    const endSpeedChange = (e) => {
        setEndSpeed(e.target.value);
        const endSpeed = e.target.value;
        const verticalSpeed = calculateVerticalSpeed({
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        const { distance, estimated, errors } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
        } else {
            setDistance("");
            setEstimated("");
        }

        setVerticalSpeed(verticalSpeed.toString());
    };

    const glideSlopeChange = (e) => {
        setGlideSlope(e.target.value);
        const glideSlope = e.target.value;
        const verticalSpeed = calculateVerticalSpeed({
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        const { distance, estimated, errors } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
        } else {
            setDistance("");
            setEstimated("");
        }

        setVerticalSpeed(verticalSpeed.toString());
    };

    const windChange = (e) => {
        setWind(e.target.value);
        const wind = e.target.value;
        const verticalSpeed = calculateVerticalSpeed({
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        const { distance, estimated, errors } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
        } else {
            setDistance("");
            setEstimated("");
        }

        setVerticalSpeed(verticalSpeed.toString());
    };

    const verticalSpeedChange = (e) => {
        setVerticalSpeed(e.target.value);
        const verticalSpeed = e.target.value;
        const glideSlope = calculateGlideSlope({
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            verticalSpeed: makeFloat(verticalSpeed),
        });

        const { distance, estimated, errors } = calculateDistance({
            startAltitude: makeInt(startAltitude),
            endAltitude: makeInt(endAltitude),
            startSpeed: makeInt(startSpeed),
            endSpeed: makeInt(endSpeed),
            wind: makeInt(wind, 0),
            glideSlope: makeFloat(glideSlope.toString()),
        });

        setErrors(errors || {});
        if (!errors) {
            setDistance(distance.toString());
            setEstimated(estimated.toString());
        } else {
            setDistance("");
            setEstimated("");
        }

        setGlideSlope(glideSlope.toString());
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo>
                    <img src="/logo.png" alt="top of descent logo favicon" />
                </Logo>
                <BoxAdvert>
                    <p>
                        Thanks that are you using this app, it means a lot.
                    </p>
                    <p>
                        Also, check the new project <a href="https://airportdb.io" target="_blank" rel="noopener noreferrer">AirportDB.io</a>
                    </p>
                </BoxAdvert>
                <Box>
                    <Header>Top of descent</Header>
                    <Hint>
                        These calculations are not strictly accurate. It
                        strongly depends on aircraft type and weather. Use it
                        for approximate decision
                    </Hint>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="startAltitude">
                                Start altitude (ft)
                            </label>
                            <Cleave
                                id="startAltitude"
                                className={
                                    errors["startAltitude"] ? "invalid" : ""
                                }
                                placeholder="30 000"
                                onChange={startAltitudeChange}
                                value={startAltitude}
                                options={{
                                    numeral: true,
                                    numeralPositiveOnly: true,
                                    numeralIntegerScale: 5,
                                    numeralDecimalScale: 0,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="endAltitude">
                                End altitude (ft)
                            </label>
                            <Cleave
                                id="endAltitude"
                                className={
                                    errors["endAltitude"] ? "invalid" : ""
                                }
                                placeholder="10 000"
                                onChange={endAltitudeChange}
                                value={endAltitude}
                                options={{
                                    numeral: true,
                                    numeralPositiveOnly: true,
                                    numeralIntegerScale: 5,
                                    numeralDecimalScale: 0,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 form-group">
                            <label htmlFor="startSpeed">
                                Start speed (kts)
                            </label>
                            <Cleave
                                id="startSpeed"
                                className={
                                    errors["startSpeed"] ? "invalid" : ""
                                }
                                placeholder="320"
                                onChange={startSpeedChange}
                                value={startSpeed}
                                options={{
                                    numeral: true,
                                    numeralPositiveOnly: true,
                                    numeralIntegerScale: 4,
                                    numeralDecimalScale: 0,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 form-group">
                            <label htmlFor="endSpeed">End speed (kts)</label>
                            <Cleave
                                id="endSpeed"
                                className={errors["endSpeed"] ? "invalid" : ""}
                                placeholder="250"
                                onChange={endSpeedChange}
                                value={endSpeed}
                                options={{
                                    numeral: true,
                                    numeralPositiveOnly: true,
                                    numeralIntegerScale: 4,
                                    numeralDecimalScale: 0,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                        <div className="col-sm-6 col-md-4 form-group">
                            <label htmlFor="wind">+/- Wind (kts)</label>
                            <Cleave
                                id="wind"
                                className={errors["endSpeed"] ? "invalid" : ""}
                                placeholder="+/- 10"
                                onChange={windChange}
                                value={wind}
                                options={{
                                    numeral: true,
                                    numeralIntegerScale: 3,
                                    numeralDecimalScale: 0,
                                }}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="glideSlope">Glideslope (°)</label>
                            <Cleave
                                id="glideSlope"
                                className={
                                    errors["glideSlope"] ? "invalid" : ""
                                }
                                placeholder="3"
                                onChange={glideSlopeChange}
                                value={glideSlope}
                                options={{
                                    numeral: true,
                                    numeralIntegerScale: 1,
                                    numeralDecimalScale: 1,
                                    numeralPositiveOnly: true,
                                }}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="verticalSpeed">
                                Vertical Speed (fpm)
                            </label>
                            <Cleave
                                id="verticalSpeed"
                                className={
                                    errors["verticalSpeed"] ? "invalid" : ""
                                }
                                placeholder="1 500"
                                onChange={verticalSpeedChange}
                                value={verticalSpeed}
                                options={{
                                    numeral: true,
                                    numeralIntegerScale: 4,
                                    numeralDecimalScale: 0,
                                    delimiter: " ",
                                    numeralPositiveOnly: true,
                                }}
                            />
                        </div>
                    </div>
                    <Split />
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="top">TOP (nm)</label>
                            <Cleave
                                id="top"
                                readOnly
                                value={distance}
                                options={{
                                    numeral: true,
                                    numeralIntegerScale: 4,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="time">Estimated time (min)</label>
                            <Cleave
                                id="time"
                                readOnly
                                value={estimated}
                                options={{
                                    numeral: true,
                                    numeralIntegerScale: 4,
                                    delimiter: " ",
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </Container>
            <SVGContainer>
                <SVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <filter
                            id="inset-shadow"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        >
                            <feComponentTransfer in="SourceAlpha">
                                <feFuncA type="table" tableValues="1 0" />
                            </feComponentTransfer>
                            <feGaussianBlur stdDeviation="6" />
                            <feOffset dx="0" dy="2" result="offsetblur" />
                            <feFlood
                                floodColor="rgb(20, 0, 0)"
                                result="color"
                            />
                            <feComposite in2="offsetblur" operator="in" />
                            <feComposite in2="SourceAlpha" operator="in" />
                            <feMerge>
                                <feMergeNode in="SourceGraphic" />
                                <feMergeNode />
                            </feMerge>
                        </filter>
                    </defs>
                    <polygon
                        points="-100,550 50,550 700,0 900,0 900,600 -100,600"
                        fill="rgb(85, 172, 238)"
                        filter="url(#inset-shadow)"
                    />
                </SVG>
            </SVGContainer>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
    }
    
    body {
        width: 100%;
        background: #222222;
    }

    #root {
        width: 100%;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 70px;

    img {
        max-width: 150px;
        height: auto;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 20px;
    position: relative;
    z-index: 2;
`;

const BoxAdvert = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 550px;
    border: 5px solid white;
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 20px;
    background: #1d1d1d;
    
    p {
        padding: 0;
        margin: 0;
    }

    a {
        color: white;
        font-weight: 500;
        text-decoration: underline;
    }
`;

const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 550px;
    border: 5px solid white;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 100px;
    background: #1d1d1d;

    label,
    input {
        display: block;
    }

    label {
        font-size: 18px;
        margin-bottom: 5px;
    }

    input {
        background: transparent;
        padding: 10px;
        border-radius: 5px;
        color: white;
        width: 100%;
        font-family: "Orbitron", "Ubuntu", sans-serif;
        letter-spacing: 2px;

        &,
        &:focus {
            outline: none;
            border: 2px solid white;
        }

        &.invalid {
            border-color: #ff5f5f;
        }
    }
`;

const Header = styled.h1`
    display: block;
    margin: 0;
    font-weight: 400;
`;

const Hint = styled.div`
    display: block;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 12px;
`;

const Split = styled.div`
    margin: 0 auto;
    border: 1px solid white;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const SVGContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 70%;
    z-index: 1;
`;
const SVG = styled.svg``;

export default App;
