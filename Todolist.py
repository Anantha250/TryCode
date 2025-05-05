import tkinter as tk
from tkinter import messagebox, simpledialog
import os

FILE_NAME = "todo_list.txt"

class ToDoApp:
    def __init__(self, root):
        self.root = root
        self.root.title("To-Do List App")
        self.root.geometry("400x500")

        self.tasks = []

        self.task_listbox = tk.Listbox(root, font=("Arial", 14), height=15, selectbackground="#888")
        self.task_listbox.pack(pady=20)

        btn_frame = tk.Frame(root)
        btn_frame.pack()

        tk.Button(btn_frame, text="เพิ่มงาน", command=self.add_task, width=12).grid(row=0, column=0, padx=5)
        tk.Button(btn_frame, text="ลบงาน", command=self.delete_task, width=12).grid(row=0, column=1, padx=5)
        tk.Button(btn_frame, text="บันทึก", command=self.save_tasks, width=12).grid(row=1, column=0, padx=5, pady=5)
        tk.Button(btn_frame, text="โหลด", command=self.load_tasks, width=12).grid(row=1, column=1, padx=5, pady=5)

        self.load_tasks()

    def add_task(self):
        task = simpledialog.askstring("เพิ่มงาน", "พิมพ์ชื่องานที่ต้องทำ:")
        if task:
            self.tasks.append(task)
            self.update_listbox()

    def delete_task(self):
        selected = self.task_listbox.curselection()
        if selected:
            del self.tasks[selected[0]]
            self.update_listbox()
        else:
            messagebox.showwarning("ลบงาน", "กรุณาเลือกงานที่ต้องการลบ")

    def update_listbox(self):
        self.task_listbox.delete(0, tk.END)
        for task in self.tasks:
            self.task_listbox.insert(tk.END, task)

    def save_tasks(self):
        with open(FILE_NAME, "w", encoding="utf-8") as f:
            for task in self.tasks:
                f.write(task + "\n")
        messagebox.showinfo("บันทึก", "บันทึกรายการงานเรียบร้อยแล้ว")

    def load_tasks(self):
        if os.path.exists(FILE_NAME):
            with open(FILE_NAME, "r", encoding="utf-8") as f:
                self.tasks = f.read().splitlines()
            self.update_listbox()

if __name__ == "__main__":
    root = tk.Tk()
    app = ToDoApp(root)
    root.mainloop()
