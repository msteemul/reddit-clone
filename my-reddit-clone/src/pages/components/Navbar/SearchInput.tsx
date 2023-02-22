import { Flex, InputGroup, InputLeftElement, Input, InputRightElement   } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

type SearchInputProps = {
    // user:
    
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex>
            <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

        </Flex>
    )
}
export default SearchInput;