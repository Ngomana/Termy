import React from 'react'
import { Button, Div, Grid, Key, Text } from '../components/design-system'
import Feature from '../components/feature'
import Layout from '../components/layout'
import FEATURES from '../lib/features'
import { styled } from '../stitches.config'

const IndexPage = () => {
  return (
    <Layout>
      <Text
        as="h1"
        css={{
          fontSize: '$4xl',
          mt: '$24',
          textAlign: 'center',

          mobile: {
            mt: '$16',
          },
        }}
      >
        A terminal with autocomplete
      </Text>

      <Demo src="/demo.mp4" autoPlay loop muted />

      <Div
        css={{
          my: '$24',

          mobile: {
            display: 'none',
          },
        }}
      >
        <Text
          as="div"
          css={{
            color: '$gray700',
            fontSize: '$xl',
            textAlign: 'center',
          }}
        >
          Press{' '}
          <Key
            shortcut="d"
            href="https://github.com/termyapp/Termy/releases/download/v0.1.4/Termy-0.1.4.dmg"
            external
          >
            D
          </Key>{' '}
          to{' '}
          <Button
            as="a"
            href="https://github.com/termyapp/Termy/releases/download/v0.1.4/Termy-0.1.4.dmg"
          >
            Download
          </Button>
          for Mac
        </Text>
      </Div>

      <Grid
        css={{
          gap: '$8',

          mobile: {
            gap: '$4',
          },
        }}
      >
        {FEATURES.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </Grid>
    </Layout>
  )
}

const Demo = styled.video({
  display: 'block',
  width: '97%',
  mx: 'auto',
  my: '$10',
  br: '$3',
  backgroundColor: '$backgroundColor',
  boxShadow: '$2xl',
  borderRadius: '$2xl',
  p: '-$2',

  mobile: {
    width: '100%',
  },
})

export default IndexPage
