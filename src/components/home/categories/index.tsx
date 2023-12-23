import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

type Props = {
  categories: [
    {
      id: number
      name: string
    }
  ]
}

const Categories = (props: Props) => {
  return (
    <section className="Categories">
      <div className="h-18 flex gap-6">
        {props.categories.map((category) => (
          <Link
            key={category.id}
            href={`/${category.id}`}
            className={`w-full h-full flex items-center justify-center bg-black/75 font-bold border border-[#333] rounded-md ${styles.category}`}
          >
            <div className="name">{category.name}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
