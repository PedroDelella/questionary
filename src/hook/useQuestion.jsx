import { useState } from "react";

export function useQuestion(steps) {
    const [currentStep, setCurrentStep] =  useState(0);

    function nextQuestion (i, e) {
        if(e) e.preventDefault()

        if(i < 0 || i >= steps.length) return
    
        setCurrentStep(i)
    }


    return {
        currentStep,
        currentComponent: steps[currentStep],
        nextQuestion,
        isFirstStep: steps[currentStep] === steps[0]
    };
}