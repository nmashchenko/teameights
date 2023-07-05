import AuthLayout from 'app/layouts/AuthLayout/AuthLayout'
import NavBarItemPageLayout from 'app/layouts/NavBarItemPageLayout/NavBarItemPageLayout'
import ProtectFinishRegistration from 'app/layouts/protected/ProtectFinishRegistration'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouteConfig, AuthRouteConfig, MainRouteConfig, ProtectedRouteConfig } from 'shared/config/routes'

export const AppRouter: FC = () => {
	return (
			<Routes>
				<Route element={<AuthLayout/>}>
					{Object.values(AuthRouteConfig).map(({element, path}) => (
						<Route path={path} element={element} key={path}/>
					))}
				</Route>
				<Route element={<ProtectFinishRegistration/>}>
					{Object.values(ProtectedRouteConfig).map(({element, path}) => (
						<Route path={path} element={element} key={path}/>
					))}
				</Route>
				<Route element={<NavBarItemPageLayout/>}>
					{Object.values(MainRouteConfig).map(({element, path}) => (
						<Route path={path} element={element} key={path}/>
					))}
				</Route>
				{Object.values(AppRouteConfig).map(({element, path}) => (
						<Route path={path} element={element} key={path}/>
					))}
			</Routes>
	)
}