// pages/docs.js

const template = '<div id="rsg-root"></div><script src="/build/bundle.js"></script>';
const Docs = () => <div dangerouslySetInnerHTML={{ __html: `${template}` }} />;

/** @component */
export default Docs;
