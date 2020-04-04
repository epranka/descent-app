const DEG_TO_RAD = 0.0174532925;
const RAD_TO_DEG = 1 / DEG_TO_RAD;
const NM_TO_FT = 6076.11549;
const FT_TO_NM = 1 / NM_TO_FT;

const calculateVerticalSpeed = ({ glideSlope, startSpeed, endSpeed, wind }) => {
    if (
        isNaN(glideSlope) ||
        isNaN(startSpeed) ||
        isNaN(endSpeed) ||
        isNaN(wind)
    ) {
        return "";
    }

    const averageSpeed = (startSpeed + endSpeed) / 2 + wind;
    const verticalSpeed_nm_p_min =
        (Math.tan(glideSlope * DEG_TO_RAD) * averageSpeed) / 60;
    const verticalSpeed = verticalSpeed_nm_p_min * NM_TO_FT;
    return Math.round(verticalSpeed);
};

const calculateGlideSlope = ({ verticalSpeed, startSpeed, endSpeed, wind }) => {
    if (
        isNaN(verticalSpeed) ||
        isNaN(startSpeed) ||
        isNaN(endSpeed) ||
        isNaN(wind)
    ) {
        return "";
    }

    const averageSpeed = (startSpeed + endSpeed) / 2 + wind;
    const glideSlopeTan = ((verticalSpeed / NM_TO_FT) * 60) / averageSpeed;
    const glideSlope = Math.atan(glideSlopeTan) * RAD_TO_DEG;
    return Math.round(glideSlope * 10) / 10;
};

const calculateDistance = ({
    startAltitude,
    endAltitude,
    glideSlope,
    startSpeed,
    endSpeed,
    wind,
}) => {
    const errors = {};
    if (!isNaN(glideSlope) && !glideSlope) {
        errors["glideSlope"] = true;
    }

    if (
        isNaN(startAltitude) ||
        isNaN(endAltitude) ||
        isNaN(glideSlope) ||
        isNaN(startSpeed) ||
        isNaN(endSpeed) ||
        isNaN(wind)
    ) {
        return {
            distance: "",
            estimated: "",
            verticalSpeed: "",
            errors: Object.keys(errors).length > 0 ? errors : false,
        };
    }

    const deltaAltitude = startAltitude - endAltitude;
    if (deltaAltitude < 0) {
        errors["startAltitude"] = true;
        errors["endAltitude"] = true;
    }

    if (!glideSlope) {
        errors["glideSlope"] = true;
    }

    if (Object.keys(errors).length > 0) return { errors };

    let distance =
        (deltaAltitude * FT_TO_NM) / Math.tan(glideSlope * DEG_TO_RAD);

    const deltaSpeed = startSpeed - endSpeed;
    const averageSpeed = (startSpeed + endSpeed) / 2 + wind;

    distance += Math.ceil(deltaSpeed / 10);

    distance += Math.ceil(wind / 10);

    const estimated = (distance / averageSpeed) * 60;

    const verticalSpeed_nm_p_min =
        (Math.tan(glideSlope * DEG_TO_RAD) * averageSpeed) / 60;
    const verticalSpeed = verticalSpeed_nm_p_min * NM_TO_FT;

    return {
        distance: Math.ceil(distance),
        verticalSpeed: Math.round(verticalSpeed),
        estimated: Math.round(estimated),
        errors: false,
    };
};

export { calculateDistance, calculateVerticalSpeed, calculateGlideSlope };
