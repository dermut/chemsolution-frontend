import { Box, Tab, Tabs } from "@mui/material";

const tabs = [
  {
    label: "Products",
    href: "/product",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const tabList = tabs.map((content, i) => {
  return (
    <Tab
      key={i}
      label={`${content.label}`}
      value={content.value}
      href={process.env.PUBLIC_URL + content.href}
    ></Tab>
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
      <Tabs value={false}>{tabList}</Tabs>
    </Box>
  );
}

export default HeaderNav;
