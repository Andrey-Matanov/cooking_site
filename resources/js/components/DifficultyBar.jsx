import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    difficultyContainer: {
        height: "20px",
        display: "flex",
        margin: "5px 0",
    },
    difficultyElement: {
        width: "10px",
        height: "20px",
        margin: "0 1px",
    },
    difficultyElementInactive: {
        width: "10px",
        height: "20px",
        margin: "0 1px",
        backgroundColor: "#a5a5a5",
    },
}));

const DifficuiltyBar = (props) => {
    const { diff } = props;
    const classes = useStyles();

    const setDifficuiltyColor = (difficulty) => {
        switch (difficulty) {
            case 1: {
                return "#5aad53";
            }
            case 2: {
                return "#5aad53";
            }
            case 3: {
                return "#b1cd4c";
            }
            case 4: {
                return "#b1cd4c";
            }
            case 5: {
                return "#fce148";
            }
            case 6: {
                return "#fce148";
            }
            case 7: {
                return "#f39451";
            }
            case 8: {
                return "#f39451";
            }
            case 9: {
                return "#f39451";
            }
            case 10: {
                return "#f39451";
            }
            default: {
                return "#000";
            }
        }
    };

    const renderScale = (difficulty) => {
        let renderArray = [];
        for (let i = 1; i <= difficulty; i++) {
            renderArray = [
                ...renderArray,
                <div
                    key={i}
                    className={classes.difficultyElement}
                    style={{ backgroundColor: setDifficuiltyColor(difficulty) }}
                ></div>,
            ];
        }
        for (let i = difficulty + 1; i <= 10; i++) {
            renderArray = [
                ...renderArray,
                <div
                    key={i}
                    className={classes.difficultyElementInactive}
                ></div>,
            ];
        }
        return renderArray;
    };

    return (
        <div className={classes.difficultyContainer}>{renderScale(diff)}</div>
    );
};

export default DifficuiltyBar;
