import React from "react";
import { Button, Container, } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ProjectImages } from "../Constants/home";

const SlidingImageDisplay = (props) => {
    const [index, setActiveStep] = React.useState(0);
    const {projectCode} = props;
    const MyCollection = ProjectImages[projectCode];
    const CollectionSize = MyCollection.length;
    // Function to go to the next picture
    const goToNextPicture = () => { index + 1 < CollectionSize && setActiveStep(index + 1) };

    const goToPrevPicture = () => { index - 1 >= 0 && setActiveStep(index - 1) };

    return (
        <div>
            <Container
                style={{
                    maxWidth: 700,
                    flexGrow: 1,
                    display: 'flex',
                }}
            >
                <Button
                    disabled={index===0}
                    size="small"
                    onClick={goToPrevPicture}
                >
                    {<KeyboardArrowLeftIcon />}
                </Button>
                <img
                    src={MyCollection[index]}
                    alt={index}
                    style={{
                        height: 255,
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    
                />

                <Button
                    disabled={index+1===CollectionSize}
                    size="small"
                    onClick={goToNextPicture}
                >
                    {<KeyboardArrowRightIcon />}
                </Button>

            </Container>
        </div>
    );
};

export default SlidingImageDisplay;
