const courseDetails =[
    {
        "id": 1,
        "detail": `<ul class="info-list">
                            <li>Affiliated to Dr. B.R. Ambedkar University, Agra Promoted jointly by National Skills Development Council (NSDC) and Tourism and Hospitality Skills Council (THSC)</li>
                            <li>
                                Our full-time professional program opens doors to global job opportunities. With many countries relying on tourism and hospitality for revenue, India's rich cultural heritage promises exponential sector growth. Recognized as a promising industry, our course meets the increasing demand for skilled professionals.
                            </li>
                            <li>
                                This program offers a rewarding career pathway filled with adventure and glamour. Star Hotels and Resorts, Tour operators, Cruise operations, Ticketing and Foreign Exchange, Catering business, Cloud kitchens, Interpreter roles, Airlines lines ,Hospitals, Malls.
                            </li>
                        </ul>`
    },
    {
        "id": 2,
        "detail" : ` <p>BBA (Bachelor of Business Administration) in Logistics Affiliated to Dr. B R Ambedkar University, AgraPromoted jointly by National Skills Development Council (NSDC) and Logistics SkillsCouncil (LSC).</p> 
        <p> Our full-time 3-year program, spanning 6 semesters, immerses you in the rapidly growing logistics industry. Witnessing significant expansion in recent years, this sector promises even more robust growth ahead.Once a subset of Business Administration, logistics has now emerged as a distinct field, essential for global goods and services delivery. Recognized by the Government of India as a premium offering in its Skill Development Mission, our course stands out with compulsory paid internships and guaranteed placements—a unique selling proposition (USP) that sets you on a path to success.</p>`
    }
]



const detailBtns = document.querySelectorAll('.exp-btn')
const details = document.querySelector('#course-detail')



detailBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        console.log(e.currentTarget.classList)
            buttonClass = e.currentTarget.classList
        if( buttonClass.contains("bsc")){
            details.innerHTML = courseDetails[0].detail
        }
        else{
            details.innerHTML = courseDetails[1].detail
        }
    })
}
)

    

    