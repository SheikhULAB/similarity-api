import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ApiDashboard from '@/components/ApiDashboard'
import RequestApiKey from '@/components/RequestApiKey'

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & open-source text similarity API',
}

const page = () => {

  return (
    <div className='max-w-7xl mx-auto mt-16'>
      <ApiDashboard />
    </div>
  )
}

export default page