import React from 'react'
import ProjectsComponent from "../components/home/projects/Projects"
import HeaderSec_1 from '../components/glopal/HeaderSec_1'
import { useTranslation } from 'react-i18next'

const Projects = ({}) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
     <HeaderSec_1 title={t("filter.our-project")} />
     <ProjectsComponent />
     
    </div>
  )
}

export default Projects