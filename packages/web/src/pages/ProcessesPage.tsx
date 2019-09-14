import React from "react";
import Page from "../components/Page";
import { Paragraph, SectionTitle } from "../typography";

const ProcessesPage: React.FC = () => (
  <Page title="Processes">
    <Paragraph>
      My primary passion focuses on firing techniques necessary to create
      ceramic work.
    </Paragraph>
    <SectionTitle>Woodfire:</SectionTitle>
    <Paragraph>
      Woodfiring is a traditional process practiced across the world stemming
      back to 25,000 BC and ranges from simple ‘pitfirings’ to contemporary
      ‘train kilns’ including the popular Eastern style kilns such as ‘Anagamas’
      and Noborigamas’ . Woodfiring contributes surface decoration, imbuing the
      work with a potent energy, while also providing a powerful community tool.
      Wood kilns typically require crews between 2-20 people depending on the
      size and duration of the firings.
    </Paragraph>
    <SectionTitle>Salt/Soda Fire:</SectionTitle>
    <Paragraph>
      Historically, salt fired ceramics was utilized as an industrial process
      designed to strengthen ceramic vessels as well as form a glaze, aiding in
      vitrification and reducing water adsorption. Contemporary, it is primary
      use as surface decoration, adding an additional complexity to the work and
      making for a unique piece.
    </Paragraph>
    <Paragraph>
      Soda fired ceramics has only been explored seriously in the last 60 years
      and still has much to explore. Soda Ash was first offered as a safer
      alternative to Salt firing. Although it is safer than salt, the two
      processes result in very different effects. Soda is now recognized for its
      on intrinsic value and stands to be further explored.
    </Paragraph>
  </Page>
);

export default ProcessesPage;
