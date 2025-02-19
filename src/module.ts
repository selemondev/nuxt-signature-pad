/* eslint-disable @typescript-eslint/no-empty-object-type */
import { defineNuxtModule, createResolver, addComponent, addTemplate } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-signature-pad',
    configKey: 'nuxtSignaturePad',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'NuxtSignaturePad',
      filePath: resolve('./runtime/components/NuxtSignaturePad.vue'),
      mode: 'client',
    })
    const templateSignatureClient = addTemplate({
      filename: 'types/index.ts',
      getContents: () => `
      import type * as Signature from '${resolve('./runtime/types/index.ts')}'
      declare global {
        export type Signature = types.Signature
      }`,
    })

    _nuxt.hook('prepare:types', ({ references }) => {
      references.push({ path: templateSignatureClient.dst })
    })
  },
})
