import React from "react";
import Head from "next/head";
import { MheaderProps } from "../interfaces";
import PropTypes from "prop-types";

/**
 * Mheader component
 */
export const Mheader: React.FC<MheaderProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Tatiaris | {props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>
    </div>
  );
};

Mheader.propTypes = {
  title: PropTypes.string.isRequired,
};
