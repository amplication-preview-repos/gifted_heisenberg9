import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { TestimonialList } from "./testimonial/TestimonialList";
import { TestimonialCreate } from "./testimonial/TestimonialCreate";
import { TestimonialEdit } from "./testimonial/TestimonialEdit";
import { TestimonialShow } from "./testimonial/TestimonialShow";
import { BlogPostList } from "./blogPost/BlogPostList";
import { BlogPostCreate } from "./blogPost/BlogPostCreate";
import { BlogPostEdit } from "./blogPost/BlogPostEdit";
import { BlogPostShow } from "./blogPost/BlogPostShow";
import { ContactInfoList } from "./contactInfo/ContactInfoList";
import { ContactInfoCreate } from "./contactInfo/ContactInfoCreate";
import { ContactInfoEdit } from "./contactInfo/ContactInfoEdit";
import { ContactInfoShow } from "./contactInfo/ContactInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PortfolioService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Testimonial"
          list={TestimonialList}
          edit={TestimonialEdit}
          create={TestimonialCreate}
          show={TestimonialShow}
        />
        <Resource
          name="BlogPost"
          list={BlogPostList}
          edit={BlogPostEdit}
          create={BlogPostCreate}
          show={BlogPostShow}
        />
        <Resource
          name="ContactInfo"
          list={ContactInfoList}
          edit={ContactInfoEdit}
          create={ContactInfoCreate}
          show={ContactInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
