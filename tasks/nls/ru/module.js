define(['jquery'], function ($) {
	var i18n = $('body').injector().get('i18n');

	i18n.addMessages('tasks', {
		'roles': {
			'manager': 'Менеджер',
			'executor': 'Исполнитель'
		},

		'menu': {
			'projectInfo': 'Информация о проекте'
		},

		'fields': {
			'seqNumber': 'Номер задачи',
			'type': 'Тип задачи',
			'executors': 'Исполнители',
			'dueDate': 'Срок',
			'content': 'Содержание',
			'status': 'Статус',
			'priority': 'Приоритет',
			'note': 'Примечание',
			'agreements': 'Согласования',
			'topFiles': 'Файлы (топ {{count}})',
			'tags': 'Теги'
		},

		'confirm': {
			'delete': {
				'task': 'Вы действительно хотите удалить задачу?',
				'tasks': 'Вы действительно хотите удалить задачи?',
				'agreemer': 'Вы действительно хотите удалить согласующего?'
			}
		},

		'view': {
			'tabs': {
				'overview': 'Свойства',
				'comments': 'Комментарии',
				'files': 'Файлы'
			},

			'general': {
				'title': 'Общие свойства'
			},
			'agreements': {
				'title': 'Согласования',

				'fields': {
					'agreemer': 'Согласующий',
					'dueDate': 'Срок',
					'done': 'Согласовано',
					'agreedAt': 'Дата',
					'comment': 'Комментарий'
				},

				'placeholders': {
					'agreemer': 'Выберите согласующего',
					'dueDate': 'Срок',
					'comment': 'Комментарий к согласованию'
				},

				'buttons': {
					'agreement': {
						'dropdown': 'Согласование',
						'agree': 'Согласовать',
						'toggleAgree': 'Согласовать с комментарием',
						'revoke': 'Отозвать согласование'
					}
				}
			},
			'statusHistory': {
				'title': 'История статуса',

				'fields': {
					'status': 'Статус',
					'author': 'Установил',
					'effectivePeriod': 'Период действия',
					'duration': 'Продолжительность'
				},

				'period': 'с {{start}} по {{finish}}',
				'duration': {
					'days': {
						'one': 'день',
						'few': 'дня',
						'many': 'дней',
						'other': 'дней'
					},
					'hours': {
						'one': 'час',
						'few': 'часа',
						'many': 'часов',
						'other': 'часов'
					},
					'minutes': 'м'
				}
			},
			'params': {
				'title': 'Пользовательские свойства',
				'empty': 'Нет пользовательских свойств',
				'placeholders': {
					'selectType': 'выберите параметр',
					'string': 'строка',
					'number': 'число',
					'date': 'дата'
				},
				'numFormat': 'Ожидаемый формат 0##[.0##]'
			}
		},

		'list': {
			'title': 'Задачи',

			'filters': {
				'custom': 'Комбинированный',
				'predefined': {
					'all': 'Все задачи',
					'overdue': 'Просроченные',
					'dayLeft': 'Срок 1 день',
					'weekLeft': 'Срок 7 дней',
					'noLimit': 'Без даты окончания',
					'closedToday': 'Закрыты сегодня',
					'closedYesterday': 'Закрыты вчера'
				}
			},

			'buttons': {
				'add': 'Создать задачу'
			},

			'placeholders': {
				'delete': 'Удалить задачу',
				'deleteSelected': 'Удалить отмеченные задачи'
			},

			'expiration': {
				'already': 'Просрочена {{days}} {{daysText}}',
				'will': 'Будет просрочена через {{days}} {{daysText}}'
			}
		},

		'create': {
			'title': 'Создание задачи',

			'placeholders': {
				'type': 'Выберите тип задачи',
				'executors': 'Выберите исполнителей',
				'priority': 'Выберите приоритет'
			},

			'labels': {
				'afterCreation': 'После создания задачи',
				'afterCreationGoToTask': 'Перейти к созданной',
				'afterCreationGoToList': 'Перейти в реестр задач',
				'afterCreationStayHere': 'Создать другую задачу'
			},

			'buttons': {
				'save': 'Создать задачу'
			}
		},

		'types': {
			'title': 'Типы задачи',

			'placeholders': {
				'name': 'Наименование типа задачи',
				'replacementType': 'Тип для замены удаляемых (опционально)'
			},

			'buttons': {
				'delete': 'Удалить тип задачи'
			}
		}
	});
});