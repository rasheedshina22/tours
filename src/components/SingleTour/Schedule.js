import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../../css/day.module.css"

const Schedule = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)

  //we could have used this
  //   const toggleInfo = () => {
  //     setInfo(showInfo => !showInfo)
  //   }
  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={() => setInfo(!showInfo)}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Schedule
