declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}

	const classnames: IClassNames
	export = classnames
}

declare module '*.svg' {
	import React from 'react'
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
	export default SVG
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare const __IS_DEV__: boolean

declare type $TSFIXME = any

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare type RootState = import('../providers/store/store').RootState
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare type AppDispatch = import('../providers/store/store').AppDispatch