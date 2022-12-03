import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyle from '../styles/global'
import THEME from '../styles/theme'
import {ThemeProvider} from 'styled-components'

class MyApp extends App {
  render () {
		// @ts-ignore
    const { Component } = this.props
    return (
      <Container>
        <ThemeProvider theme = {THEME}>
          <GlobalStyle/>
          <Component/>
          </ThemeProvider>
      </Container>
    )
  }
};

export default MyApp;