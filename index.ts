export class GradeSchool {
  _roster: { [key: number]: string[] } = {} = {}
  _students = new Map()

  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(name: string, grade: number) {
    if (this.isInListAlready(name)) {
      const currentGrade = this._students.get(name)
      this._roster[currentGrade] = []
    } else {
      this._students.set(name, grade)

      const currentGradeRoster: string[] | null = this._roster[grade]
      if (currentGradeRoster) {
        this._roster[grade].push(name)
        this._roster[grade].sort()
      } else {
        this._roster[grade] = [name]
      }
    }
  }

  grade(grade: number) {
    const arr = this._roster[grade] || []
    return JSON.parse(JSON.stringify(arr));

  }

  isInListAlready(name: string) {
    return this._students.has(name)
  }
}
