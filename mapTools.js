const createPoint = (coordinate, size, insideColor, outlienColor, outlineWidth, Graphic, graphicsLayer) => {
    // Create a point (Coordinate of point)
    const point = {
        type: "point",
        longitude: coordinate.lng,
        latitude: coordinate.lat
    };
    // Create point style
    const pointStyle = {
        type: "simple-marker",
        size: size,
        color: insideColor,
        outline: {
            color: outlienColor,
            width: outlineWidth
        }
    };
    // Create a new instance of Graphic
    const pointGraphic = new Graphic({
        geometry: point,
        symbol: pointStyle
    });
    // Show point at seted coordinate
    graphicsLayer.add(pointGraphic);

    return [point, pointStyle];
}

const createPolyLine = (paths, color, width, Graphic, graphicsLayer) => {
    // Paths of Poly-Line
    const polyline = {
        type: "polyline",
        paths: paths
    };
    // Create poly-line style
    const lineStyle = {
        type: "simple-line",
        color: color, // Orange
        width: width
    };
    // Create a new instance of Graphic
    const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: lineStyle
    });
    // Show poly-line at seted coordinate
    graphicsLayer.add(polylineGraphic);

    return [polyline, lineStyle];
}

const createPolygonGeometry = (coordinate, color, outlineColor, outlineWidth, Graphic, graphicsLayer) => {
    // Create a polygon geometry
    const polygon = {
        type: "polygon",
        rings: coordinate
    };
    // Create polygon geometry style
    const polygonGeometryStyle = {
        type: "simple-fill",
        color: color,
        outline: {
            color: outlineColor,
            width: outlineWidth
        }
    };
    // Create a new instance of Graphic
    const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: polygonGeometryStyle,
    });
    graphicsLayer.add(polygonGraphic);

    return [polygon, polygonGeometryStyle];
}

const createPopUp = (title, content, name, description, coordinateObj, styleObj, Graphic, graphicsLayer) => {
    const popupTemplate = {
        title: title,
        content: content
    }
    const attributes = {
        Name: name,
        Description: description
    }
    // Create a new instance of Graphic
    const popupGraphic = new Graphic({
        geometry: coordinateObj,
        symbol: styleObj,

        attributes: attributes,
        popupTemplate: popupTemplate
    });
    graphicsLayer.add(popupGraphic);

    return [popupTemplate, attributes];
}

const createCircle = (coordinate, radius, color, outlineWidth, outlineColor, Circle, Graphic, graphicsLayer) => {
    const circleGeometry = new Circle({
        center: [coordinate.lng, coordinate.lat],
        geodesic: true,
        numberOfPoints: 100,
        radius: radius,
        radiusUnit: "kilometers"
    });
    // Create circle style
    const circleStyle = {
        type: "simple-fill",
        color: color,
        outline: {
            width: outlineWidth,
            color: outlineColor
        }
    }
    // Create a new instance of Graphic
    const circleGraphic = new Graphic({
        geometry: circleGeometry,
        symbol: circleStyle
    });
    graphicsLayer.add(circleGraphic);

    return [circleGeometry, circleStyle];
}

/*--- Custom function ---*/
const createPointWithStyle = (coordinate, customPointStyle, Graphic, graphicsLayer) => {
    // Create a point (Coordinate of point)
    const point = {
        type: "point",
        longitude: coordinate.lng,
        latitude: coordinate.lat
    };
    // Create a new instance of Graphic
    const pointGraphic = new Graphic({
        geometry: point,
        // Create point style
        symbol: customPointStyle
    });
    // Show point at seted coordinate
    graphicsLayer.add(pointGraphic);

    return [point, customPointStyle];
}

export {
    createPoint,
    createPolyLine,
    createPolygonGeometry,
    createPopUp,
    createCircle,
    createPointWithStyle
}
