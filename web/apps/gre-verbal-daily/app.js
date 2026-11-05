/* Verbal Daily Ten: ten mixed verbal questions a day, the same all day, with a streak. */
(function () {
  'use strict';
  const KEY = 'gre-verbal-daily.days';
  // Today's ten: 4 text completion, 3 sentence equivalence, 3 reading. The same day gives the same set.
  const today = (data, day) => {
    const r = SK.rng(SK.daySeed('gre-verbal-daily', day));
    const rc = SK.takeGroups(r, SK.passageItems(data.gre_reading).filter((x) => data.gre_reading.find((p) => p.id === x.group).length === 'short'), 3).slice(0, 3);
    return SK.fromBank(r, data.tc, 'All', 4).concat(SK.fromBank(r, data.se, 'All', 3), rc);
  };
  const App = {
    about: 'A small daily habit beats a weekly cram. Each day this app gives the same ten verbal questions, four text completions, three sentence equivalence and three reading, so you can come back to finish them. Your streak counts the days in a row you have done your ten.',
    how: ['Open the app once a day and press **Start today\'s ten**.', 'Finish all ten to keep your streak.', 'Review the explanations at the end.'],
    tabs: [
      { id: 'today', label: 'Today', render(el, ctx) {
        const days = SK.store.get(KEY, {});
        const d = SK.dayKey();
        el.appendChild(SK.card('Today\'s ten', SK.stats([['Day streak', SK.streak(Object.keys(days))], ['Days done', Object.keys(days).length], ['Today', days[d] ? days[d] + ' / 10' : 'Not yet']]),
          SK.btn(days[d] ? 'Do today\'s ten again' : 'Start today\'s ten', () => SK.quiz(el, today(ctx.data, d), { title: 'Daily ten, ' + d, mode: 'practice', onFinish: (sum) => { const all = SK.store.get(KEY, {}); all[d] = Math.max(all[d] || 0, sum.correct); SK.store.set(KEY, all); } }), '', { 'data-auto': 'once' })));
        const hist = Object.entries(days).sort().slice(-14);
        if (hist.length) el.appendChild(SK.card('Last two weeks', SK.chart.bars(hist.map(([k, v]) => ({ label: k.slice(5), value: v })), { label: 'Score per day' })));
      } },
    ],
    today,
    checks: {
      'the daily set is ten valid questions and stays the same all day': (data, assert) => {
        const a = today(data, '2026-11-05'), b = today(data, '2026-11-05'), c = today(data, '2026-11-06');
        assert.equal(a.length, 10);
        assert.deepEqual(a.map((x) => x.id), b.map((x) => x.id));
        assert.notDeepEqual(a.map((x) => x.id), c.map((x) => x.id));
        for (const it of a) assert.deepEqual(SK.validateItem(it), []);
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
