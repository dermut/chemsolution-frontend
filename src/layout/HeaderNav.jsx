import { Tab, Tabs } from '@mui/material';

const tabs = [
    {
        "label": "About Us",
        "value": "1"
    },
    {
        "label": "Products",
        "value": "2"
    },
    {
        "label": "Contact Us",
        "value": "3"
    }
];

const tabList = tabs.map((content, i) => {
    return (
        <Tab key={i} label={`${content.label}`} value={content.value}></Tab>
    );
});

function HeaderNav() {
    return (
        <Tabs>
            {tabList}
        </Tabs>
    );
}

export default HeaderNav;