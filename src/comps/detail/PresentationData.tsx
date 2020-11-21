import * as React from "react";
import { Presentation } from "../../types/Presentation";
import styled from "styled-components";
import { PresenterInfo } from "./presentation_data/PresenterInfo";

const PresentationDataRoot = styled.div`
  margin: 2em 3em;
`;

const PresentationTitle = styled.div`
  font-size: 5em;
  line-height: 1.1em;
`;

const PresentationDescription = styled.div`
  font-size: 2.5em;
  line-height: 1.1em;
`;

export function PresentationData(props: { presentation: Presentation }) {
  return (
    <PresentationDataRoot>
      <PresenterInfo presenter={props.presentation.presenter} />
      <PresentationTitle>{props.presentation.presentTitle}</PresentationTitle>
      <PresentationDescription>
        {props.presentation.presentDescription.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </PresentationDescription>
    </PresentationDataRoot>
  );
}
