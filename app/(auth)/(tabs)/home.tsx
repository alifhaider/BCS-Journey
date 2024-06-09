import {View} from 'react-native'
import React from 'react'
import {atoms as a, tokens as t} from '@/alf'
import Button from '@/components/Button'

const dbExercises = [
  {
    id: '1',
    question: 'what makes water?',
    options: ['H2O', 'H2O2', 'H3O', 'H4O'],
    answer: 'H2O',
  },
  {
    id: '2',
    question: 'what is the atomic number of oxygen?',
    options: ['8', '9', '10', '11'],
    answer: '8',
  },
  {
    id: '3',
    question: 'what is the atomic number of hydrogen?',
    options: ['1', '2', '3', '4'],
    answer: '1',
  },
  {
    id: '4',
    question: 'what is the atomic number of carbon?',
    options: ['6', '7', '8', '9'],
    answer: '6',
  },
  {
    id: '5',
    question: 'what is the atomic number of nitrogen?',
    options: ['7', '8', '9', '10'],
    answer: '7',
  },
]

const dbLessons = [
  {
    id: '1',
    lessonNumber: '1',
    exercises: dbExercises,
  },
  {
    id: '2',
    lessonNumber: '2',
    exercises: dbExercises,
  },
  {
    id: '3',
    lessonNumber: '3',
    exercises: dbExercises,
  },
]

const dbBooks = [
  {
    id: '1',
    title: 'The Pragmatic Programmer',
    readme: `some long text`,
    lessons: dbLessons,
  },
]

const Home = () => {
  function getChapter(chapterId: string) {
    return dbBooks.find(b => b.id === chapterId)
  }

  const chapter = getChapter('1')

  // const getExercises = (lessonId: string) => {
  //   const lesson = dbBook.lessons.find(l => l.id === lessonId)
  //   return lesson?.exercises
  // }

  // const getAnswer = (lessonId: string, exerciseId: string) => {
  //   const exercises = getExercises(lessonId)
  //   const exercise = exercises?.find(e => e.id === exerciseId)
  //   return exercise?.answer
  // }

  return (
    <View
      style={[
        a.flex_1,
        a.justify_center,
        a.align_center,
        a.gap_2xl,
        {backgroundColor: t.color.purple_700},
      ]}>
      {chapter?.lessons.map(lesson => (
        <Button
          label={String(lesson.id)}
          key={lesson.id}
          href={`/programs/ban/${lesson.id}`}
          variant="map"
        />
      ))}
    </View>
  )
}

export default Home
