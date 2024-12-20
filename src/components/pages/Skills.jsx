import styles from "./Skills.module.css";

import { Link } from "react-router-dom";

import "../../i18n";
import { useTranslation } from "react-i18next";

import PageTitle from "../layout/PageTitle";
import ListTitle from "../layout/List/ListTitle";
import ListItem from "../layout/List/ListItem";
import Button from "../layout/Button";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <PageTitle title={t("skills.title")} />
      <div className={styles.mainBox}>
        <div className={styles.box}>
          <ListTitle listTitle={t("skills.subtitle1")} />
          <ListItem icon="html5" text="HTML 5" />
          <ListItem icon="css3" text="CSS 3" />
          <ListItem icon="js" text="JavaScript" />
          <ListItem icon="ts" text="TypeScript" />
          <ListItem icon="react" text="React" />
          <ListItem icon="redux" text="Redux" />
        </div>
        <div className={styles.box}>
          <ListTitle listTitle={t("skills.subtitle2")} />
          <ListItem icon="node" text="Node.js" />
          <ListItem icon="mongodb" text="MongoDB" />
          <ListItem icon="mongoose" text="Mongoose" />
          <ListItem icon="firebase" text="Firebase" />
          <ListItem icon="sql" text="SQL" />
          <ListItem icon="oracle" text="Oracle" />
        </div>
        <div className={styles.box}>
          <ListTitle listTitle={t("skills.subtitle3")} />
          <ListItem icon="c" text="C" />
          <ListItem icon="java" text="Java" />
          <ListItem icon="python" text="Python" />
          <ListItem icon="android" text="Android Studio" />
          <ListItem icon="figma" text="Figma" />
        </div>
      </div>
      <Link to="/projects">
        <Button title={t("skills.navigationbutton")} />
      </Link>
    </div>
  );
};

export default Skills;
