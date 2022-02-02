import { Box, Tab, Tabs } from '@mui/material';

const tabs = [
    {
        "label": "Products"
    },
    {
        "label": "Contact Us"
    }
];

const tabList = tabs.map((content, i) => {
    return (
        <Tab key={i} label={`${content.label}`} value={content.value}></Tab>
    );
});

function HeaderNav() {
    return (
        <Box
            display="grid"
            alignItems="center"
            gridTemplateColumns="1fr 5fr"
            paddingTop="10px"
        >
            <Box classNameName="emptyBox"></Box>
            <Tabs 
                value={false}
            >
                {tabList}
            </Tabs>
        </Box>
    );
}

export default HeaderNav;