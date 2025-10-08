import UniversalHeader from "./UniversalHeader";

function PageTemplate({ children }) {
  return (
    <div>
      <UniversalHeader />
      {children || null }
    </div>
  );
}

export default PageTemplate;