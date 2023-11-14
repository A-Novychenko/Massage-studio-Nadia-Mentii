import styles from "./Intro.module.scss";

export const IntroSection = () => {
  return (
    <>
      <div className="container">
        <h1 className={styles.title}>Наші спеціалісти</h1>
      </div>
      <div className="container">
        <p className={styles.intro_text}>
          Кваліфіковані масажисти з довгостроковим досвідом у різних техніках
          масажу. Наша команда об&apos;єднує професіоналів, прихильних до
          створення сприятливого та розслаблюючого досвіду для клієнтів.
          Професійні навички: Володіння різноманітними техніками масажу,
          включаючи шведський, тайський, глибокий, лімфодренаж та інші. Знання
          анатомії та фізіології для ефективного впливу на точки напруги та
          проблемні зони. Досвід роботи з клієнтами з різними потребами,
          включаючи керування болями, відновлення після травм та загальний
          релакс. Ключові якості: Відповідальність: Ми уважно слухаємо запити
          клієнтів та ретельно вивірені та персоналізовані процедури. Старання:
          Прагнемо постійного вдосконалення своїх навичок, стежимо за новими
          тенденціями в галузі масажу і застосовуємо їх у практиці.
          Дружелюбність та Професіоналізм: Наша мета – створити довірчу
          атмосферу, де клієнти можуть почуватися комфортно та розслаблено.
          Прагнення до Турботи про Клієнтів: Ми пишаємося тим, що наша робота не
          просто професія, а турбота про здоров&apos;я та добробут кожного
          клієнта. Наша місія – допомагати їм досягти фізичної та емоційної
          рівноваги через видатний масаж. Якщо ви шукаєте кваліфікованих та
          відданих масажистів для вашого спа-центру або студії, ми готові
          запропонувати наші навички та досвід для забезпечення неперевершеного
          рівня обслуговування.
        </p>
      </div>
    </>
  );
};