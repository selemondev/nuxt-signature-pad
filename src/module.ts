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
      filename: '../dist/types.d.ts',
      getContents: () => `
      declare module 'nuxt-signature-pad/types' {
        export * from '${resolve('./runtime/types/index')}'
      }
      
      declare module '@vue/runtime-core' {
        interface ComponentCustomProperties {
          $signature: import('${resolve('./runtime/types/index')}').Signature
        }
      }`,
    })

    _nuxt.hook('prepare:types', ({ references }) => {
      references.push({ path: templateSignatureClient.dst })
    })
  },
})
