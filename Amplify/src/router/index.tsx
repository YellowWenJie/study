import React, { Suspense, useState } from 'react'
import { router } from './router'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Authenticator } from '@aws-amplify/ui-react'
import Loading from '../components/Loading'

function View() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* suspense 配合 router 的 lazy */}
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {router.map((r) => {
              return <Route path={r.path} key={r.key} element={r.component} />
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}
export default View
