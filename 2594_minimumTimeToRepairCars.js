/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let [m_lo, m_hi] = [0, Number.MAX_SAFE_INTEGER]
    while (m_lo < m_hi) {
        let m_mid = m_lo + ((m_hi - m_lo) >>> 1)//left round -> ok
        let _cars = 0
        for (let rank of ranks) {
            /**
             * t = r * (n ** 2)
             * n**2 = t/r
             * n = (t/r)**(1/2) since n is strictly positive
             * n > Math.floor(t/r**(1/2))
             */
            _cars += Math.floor((m_mid / rank) ** (1 / 2))
        }
        console.log(`m = ${m_mid} -> cars = ${_cars}`)
        if (_cars >= cars) m_hi = m_mid
        else m_lo = m_mid + 1
    }
    return m_lo
};