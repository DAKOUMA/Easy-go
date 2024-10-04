import { create } from "zustand"

export const useDateStore = create((set) => ({
    date: {
        startDate: "Sat Sep 28 2024 01:52:54 GMT+0300 (East Africa Time)",
        endDate: "Sat Sep 28 2024 01:52:54 GMT+0300 (East Africa Time)"
      },
    dateSaved: {

    },
    setDate: (date) => set ({date}),
    setDateSaved: (dateSaved) => {
      const dateNow = new Date(dateSaved).toLocaleDateString("en-CA")
      set({dateSaved: dateNow})
    }
}))