import React from 'react'
import { Flex, Box, Text } from '@blockstack/ui'
import { getPerson, getUserData, Session } from '../auth'

const Auth = () => {
  if (!Session.isUserSignedIn()) {
    return null
  }

  const Avatar = () => {
    const person = getPerson()

    if (person.avatarUrl()) {
      return (
        <Box
          borderRadius="50%"
          width="24px"
          height="24px"
          display="inline-block"
          overflow="hidden"
          mr={2}
          style={{ position: 'relative', top: '6px' }}
        >
          <Box as="img" src={person.avatarUrl()} maxWidth="100%" minHeight="24px" minWidth="24px" />
        </Box>
      )
    }
    return null
  }

  return (
    <Box>
      <Avatar />
      <Text fontWeight="500">{getUserData().username}</Text>
      <Text
        fontWeight="300"
        display="inline-block"
        ml={5}
        color="ink.400"
        cursor="pointer"
        onClick={() => {
          Session.signUserOut()
          window.location = '/'
        }}
      >
        Sign out
      </Text>
    </Box>
  )
}

export const Header = () => {
  return (
    <Flex width="100%" justifyContent="space-between" px={4} py={3}>
      <Box alignItems onClick={() => (document.location = '/')} cursor="pointer">
      <img src="/logo.png" />
      </Box>
      <Auth />
    </Flex>
  )
}
