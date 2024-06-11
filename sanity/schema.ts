import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'

import author from './schemaTypes/author'
import blog from './schemaTypes/blog'
import { academy } from './schemaTypes/academy'
import subCategory from './schemaTypes/subCategory'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, category, blockContent, academy, subCategory],
}
