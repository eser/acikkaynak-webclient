import { Box, Grid } from "@primer/components";
import Container from "../components/Container/Container";
import Pagehead from "../components/Pagehead/Pagehead";
import {
  FileBadgeIcon,
  MortarBoardIcon,
  RocketIcon,
} from "@primer/octicons-react";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import Spacer from "../components/Spacer/Spacer";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_CATEGORIES_AND_CERTIFICATES } from "./CertificatesQueries";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Certificate({ name, slug, description }) {
  return <Card>
    <Card.Icon icon={MortarBoardIcon} />

    <Card.Header>
      <Card.Title>
        {name}
      </Card.Title>
    </Card.Header>

    <Card.Body>
      {description}
    </Card.Body>

    <Card.Footer>
      <Button mt={2} as={Link} block to={`/certificate/${slug}`} variant={""}>
        Başvur
      </Button>
    </Card.Footer>
  </Card>;
}

Certificate.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
};

function CertificatesAll() {
  const { loading, error, data } = useQuery(
    FETCH_ALL_CATEGORIES_AND_CERTIFICATES,
  );

  if (loading) return <Loading />;
  if (error) return <Error>Hay aksi, bir hata oluştu.</Error>;

  return (
    <>
      {data.certificateCategoriesAll.edges.map(({ node }) => {
        const { name, description, certificates } = node;
        return (
          <Section>
            <Section.Header>
              <Section.Icon icon={RocketIcon} />
              <Box>
                <Section.Title>{name}</Section.Title>
                <span>{description}</span>
              </Box>
            </Section.Header>

            <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
              {certificates.edges.map(({ node }) => {
                const { name, description, slug } = node;
                return (
                  <Certificate
                    name={name}
                    slug={slug}
                    description={description}
                  />
                );
              })}
            </Grid>

            <Spacer />
          </Section>
        );
      })}
    </>
  );
}

function Certificates() {
  return (
    <>
      <Container>
        <Pagehead
          title="Sertifikalar"
          description={"Sertifikalar sayesinde profilinde marifetlerini sergileyebilirsin"}
          icon={FileBadgeIcon}
        >
        </Pagehead>

        <Spacer />

        <CertificatesAll />
      </Container>
    </>
  );
}

export { Certificates as default };
