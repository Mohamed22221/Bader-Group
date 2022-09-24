import React from 'react'
import HeaderSec_1 from '../components/glopal/HeaderSec_1'
import { useTranslation } from 'react-i18next'
import AboutConstruction from '../components/construction/about/AboutConstruction';
import ProjectsComponent from "../components/home/projects/Projects"
import DottedLine from '../components/glopal/DottedLine';

const Construction = () => {
 const { t, i18n } = useTranslation();
  return (
    <div>
     <HeaderSec_1 title={t("nav.construction")} />
     <AboutConstruction />
     <DottedLine />
     <ProjectsComponent />
     <DottedLine />
    </div>
  )
}

export default Construction