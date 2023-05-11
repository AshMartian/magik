// Simple react component that renders an iframe to linktree inside a modal

import { useState } from 'react';

import {
  BsCashCoin,
  FaAmazon,
  FaInstagram,
  FaTwitter,
  SiOnlyfans,
  SiSnapchat,
  TfiHandPointLeft,
  TfiHandPointRight,
} from 'react-icons/all';

import {
  Button,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';

// Will store Instagram, Amazon Wishlist, CashApp, OnlyFans, Twitter, Snapchat

export default function LinkTree() {
    
      const [opened, setOpened] = useState(false);
    
      return (
    
     <>
    
        <Button sx={{ marginTop: '1em' }} variant="gradient" gradient={{ from: 'rgba(140, 82, 255, 0.8)', to: '#ec69b8a6', deg: 35 }} size='lg' onClick={() => setOpened(true)}>
            <Stack align="center">
                <Group spacing={1}>
                    <TfiHandPointRight />
                    <TfiHandPointLeft />
                </Group>
                <Text size="sm">Reach Me</Text>
            </Stack>
        </Button>
    
        <Modal
    
          opened={opened}
    
          onClose={() => setOpened(false)}
    
          title={
            <Text size="xl" weight={700}>
                Reach Me
            </Text>
          }
          centered
          size="lg"
    
        >
            <SimpleGrid spacing={12}>
                <Button leftIcon={<SiSnapchat></SiSnapchat>} href="http://snapchat.com/add/magikmistress" component='a' variant="gradient" gradient={{ from: '#ffec02', to: '#f08c00', deg: 35 }} size='lg' target="_blank">
                     Snapchat
                </Button>

                <Button leftIcon={<FaInstagram></FaInstagram>} href="http://instagram.com/mistressofmagik" component='a' variant="gradient" gradient={{ from: '#8a3ab9', to: '#e95950', deg: 35 }} size='lg' target="_blank">
                     Instagram
                </Button>

                <Button leftIcon={<FaTwitter></FaTwitter>} href="https://twitter.com/mistresofmagik?s=09" component='a' variant="gradient" gradient={{ from: '#1DA1F2', to: '#015d7c', deg: 35 }} size='lg' target="_blank">
                    Twitter
                </Button>
                
                <Button leftIcon={<FaAmazon />} href="https://www.amazon.com/hz/wishlist/ls/126EJJ44H1OYX?ref_=wl_share" component='a' variant="gradient" gradient={{ from: ' #FF9900', to: '#A6885A', deg: 35 }} size='lg' target="_blank">
                     Wishlist
                </Button>

                <Button leftIcon={<SiOnlyfans/>} href="https://onlyfans.com/mistressofmagik" component='a' variant="gradient" gradient={{ from: '#8188F0', to: '#2281B3', deg: 35 }} size='lg' target="_blank">
                     OnlyFans
                </Button>

                <Button leftIcon={<BsCashCoin/>} href="https://cash.app/$mistressofmagik" component='a' variant="gradient" gradient={{ from: 'green', to: '#00D632', deg: 35 }} size='lg' target="_blank">
                    Full Attention
                </Button>

            </SimpleGrid>
          
    
        </Modal>
    
     </>
    
      );
    
    }
