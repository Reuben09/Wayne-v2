import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'wayne-move-v2',

  projectId: '2yk020a2',
  dataset: 'production',

  plugins: [structureTool(), visionTool(),  vercelDeployTool(),],

  schema: {
    types: schemaTypes,
  },
})
