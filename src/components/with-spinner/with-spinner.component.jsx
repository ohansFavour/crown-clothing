import React from "react";
import {SpinnerContainer, spinnerOverlay, SpinnerOverlay} from "./with-spinner.styles";

export const withSpinner = (WrappedComponent) => ({isLoading, ...otherProps})=>{
    const spinner = isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): <WrappedComponent/>

    return spinner;
}
