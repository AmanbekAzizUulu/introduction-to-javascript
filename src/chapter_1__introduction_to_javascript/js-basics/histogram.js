/**
 * Класс DefaultMap расширяет Map, добавляя значение по умолчанию для отсутствующих ключей.
 *
 * @class
 * @extends Map
 */
class DefaultMap extends Map {
    /**
     * Создает новый DefaultMap с заданным значением по умолчанию.
     *
     * @param {*} defaultValue Значение по умолчанию для отсутствующих ключей.
     */
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    /**
     * Получает значение по ключу. Если ключ отсутствует, возвращает значение по умолчанию.
     *
     * @param {*} key Ключ, для которого нужно получить значение.
     * @returns {*} Значение, связанное с ключом, или значение по умолчанию.
     */
    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}

/**
 * Класс Histogram используется для подсчета частоты появления символов в строках.
 *
 * @class
 */
class Histogram {
    /**
     * Создает новый объект Histogram с пустой гистограммой.
     */
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    /**
     * Добавляет текст в гистограмму, удаляя пробелы и приводя к верхнему регистру.
     *
     * @param {string} text Текст для добавления в гистограмму.
     */
    add(text) {
        text = text.replace(/\s/g, "").toUpperCase();

        for (let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }

    /**
     * Возвращает строковое представление гистограммы, отсортированное по частоте символов.
     *
     * @returns {string} Строковое представление гистограммы.
     */
    toString() {
        let entries = [...this.letterCounts];

        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });

        for (let entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }

        entries = entries.filter(entry => entry[1] >= 1);

        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );

        return lines.join("\n");
    }
}

/**
 * Считывает ввод с консоли и создает объект Histogram.
 * Завершается, когда вводится строка "EXIT".
 *
 * @returns {Promise<Histogram>} Объект Histogram.
 */
async function histogramFromSTDIN() {
	console.log("Type 'EXIT' on new line to terminate program");
    process.stdin.setEncoding("utf-8");

    let histogram = new Histogram();

    for await (let chunk of process.stdin) {
        if (chunk.trim() === "EXIT") {
            process.stdin.end();
            break;
        }
        histogram.add(chunk);
    }

    return histogram;
}

histogramFromSTDIN().then(histogram => {
	if (histogram) {
        console.log(histogram.toString());
    } else {
        console.error("Error: Histogram is null.");
    }
});
