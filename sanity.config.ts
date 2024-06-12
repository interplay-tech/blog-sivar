"use client"

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { deskTool } from 'sanity/desk'
import { theme } from './theme'
import Logo from './components/components/Logo'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  name:"blog_config",
  title: "blog congif",
 
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    muxInput(),
  ],
  studio:{
    components:{
      logo:Logo
    }
  },
  theme:theme
})
