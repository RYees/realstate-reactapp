import { useState } from 'react'
import { useRouter } from  'next/router'
import Image from 'next/image'
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import {BsFilter} from 'react-icons/bs'

import React from 'react'

const search = () => {
const [searchFilters, setSearchFilters] = useState(false);
const router = useRouter();
  return (
    <Box>
        <Flex cursor="pointer" bg="gray.100">
             <Text>Search Property By Filters</Text>
        </Flex>
    </Box>
  )
}

export default search