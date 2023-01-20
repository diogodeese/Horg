import logoImage from "../assets/logo.svg"
import { Plus, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { NewHabitForm } from "./NewHabitForm"

export function Header() {
  return(
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img 
            src={logoImage} 
            alt="Habits"
            draggable="false"
          />

          <Dialog.Root>
            <Dialog.Trigger 
              type="button"
              className="border border-violet-500 text-violet-400 rounded-lg font-semibold px-5 py-3 flex items-center gap-3 transition ease-in hover:border-violet-300"
            >
              <Plus size={20} className="text-violet-400" />
              New Habit
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

              <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-xl w-full max-w-md top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <Dialog.Title className="text-3xl leading-tight font-bold">
                  New Habit
                </Dialog.Title>

                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                  <X size={24} aria-label="Close" />
                </Dialog.Close>

                <NewHabitForm />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
  )
}