// defines how todo is structured

class ToDo {
  String? id;
  String? todoText;
  bool isDone;

  ToDo({
    required this.id,
    required this.todoText,
    this.isDone = false,
  });

  // initial list is prepopulated with some todos
  static List<ToDo> todoList() {
    return [
      ToDo(id: '01', todoText: 'Complete CS279R Flutter app', isDone: true ),
      ToDo(id: '03', todoText: 'Go to class', ),
      ToDo(id: '04', todoText: 'Figure out how pair research works', ),
      ToDo(id: '05', todoText: 'Read 279R papers', ),
    ];
  }
}