'use client'
import Resources from '@/app/resources/resources'
import styles from './RightMenu.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function RightMenu(props: any) {
    let openFilter = props.openFilter;
    let setOpenFilter = props.setOpenFilter;
    let selectedBrands: any = props.selectedBrands;
    let setSelectedBrands = props.setSelectedBrands;
    let [selectedTimes, setSelectedTimes] = useState<Set<string>>(new Set());
    let [selectedSortBy, setSelectedSortBy] = useState<Set<string>>(new Set());


    let brands = [
        'Adidas',
        'Adidas Originals',
        'Adidas Tiger',
        'Arena',
        'Asics',
        'Asics Tiger',
        'Balenciaga',
        'Billabong',
        'Bottega Veneta',
        'Calvin Klein',
        'Chanel',
        'Chupps',
        'Columbia',
        'Coega',
        'Converse',
        'Ea7 Emporio Armani',
        'Ekn Footwear',
        'Ellesse',
        'Everlast',
        'Fila',
        'Giant',
        'Giorgio Armani',
        'Givenchy',
        'Good News',
        'Havaianas',
        'Hoka',
        'Jordan',
        'Loro Piana',
        'Louis Vuitton',
        'Mango',
        'New Balance',
        'Nike',
        'Nike Golf',
        'Puma',
        'Prada',
        'Reebok',
        'Saint Laurent',
        'Snitch',
        'Speedo',
        'SuperDry',
        'The North Face',
        'Timberland',
        'Tommy Hilfiger',
        'Under Armour',
        'Valentino',
        'Vans',
        'Veja',
        'Venum'
    ];

    let times = [
        'Today',
        '3 days',
        '7 days',
        '15 days'
    ];

    let sortBy = [
        'Low to High',
        'High to Low',
        'Popularity',
        'Newest First'
    ];

    let router = useRouter();
    return (
        <motion.div initial={{ x: 0 }} animate={{ x: openFilter ? 0 : -400 }}>
            <div className={`${styles.rightMenu}`}>
                <div className={`${styles.rightMenu__header}`}>
                    <div className={`${styles.rightMenu__headerLeft}`}>
                        <img
                            onClick={() => setOpenFilter(false)}
                            className={`${styles.rightMenu__back}`}
                            src={Resources.backArrowIcon.src}
                        ></img>
                        <div>
                            Filters
                        </div>
                    </div>
                    {/* {  <button
                        className={`${styles.rightMenu__applyButton}`}
                        onClick={() => {
                            localStorage.setItem('brand-filter', JSON.stringify(selectedBrands))
                            router.push('/components/SearchResults')
                            setOpenFilter(false)
                        }}
                    >
                        Save
                    </button> } */}
                </div>
                <div className={`${styles.rightMenu__brands}`}>
                    <div className={`${styles.rightMenu__BrandLabel}`}>
                        Brand
                    </div>
                    <div className={`${styles.rightMenu__brandsFlex}`}>
                        {brands.map((brand: any, index: number) => {
                            return (
                                <div key={index} className={`${styles.rightMenu__brandButton}`}
                                    style={{
                                        backgroundColor: selectedBrands && selectedBrands.has(brand) ? 'black' : '#D9D9D9',
                                        color: selectedBrands && selectedBrands.has(brand) ? 'white' : 'black'
                                    }}
                                    onClick={() => {
                                        let temp = new Set(selectedBrands);
                                        selectedBrands ? (!selectedBrands.has(brand) ?
                                            temp.add(brand)
                                            : temp.delete(brand)) : '';
                                        setSelectedBrands(temp);
                                    }}>
                                    {brand}
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* <div className={`${styles.rightMenu__times}`}>
                    <div className={`${styles.rightMenu__BrandLabel}`}>
                        Time
                    </div>
                    <div className={`${styles.rightMenu__brandsFlex}`}>
                        {times.map((time: any, index: number) => {
                            return (
                                <div key={index} className={`${styles.rightMenu__brandButton}`}
                                    style={{
                                        backgroundColor: selectedTimes && selectedTimes.has(time) ? 'black' : '#D9D9D9',
                                        color: selectedTimes && selectedTimes.has(time) ? 'white' : 'black'
                                    }}
                                    onClick={() => {
                                        let temp = new Set(selectedTimes);
                                        selectedTimes ? (!selectedTimes.has(time) ?
                                            temp.add(time)
                                            : temp.delete(time)) : '';
                                        setSelectedTimes(temp);
                                    }}>
                                    {time}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`${styles.rightMenu__sortBy}`}>
                    <div className={`${styles.rightMenu__BrandLabel}`}>
                        Sort By
                    </div>
                    <div className={`${styles.rightMenu__brandsFlex}`}>
                        {sortBy.map((sort: any, index: number) => {
                            return (
                                <div key={index} className={`${styles.rightMenu__brandButton}`}
                                    style={{
                                        backgroundColor: selectedSortBy && selectedSortBy.has(sort) ? 'black' : '#D9D9D9',
                                        color: selectedSortBy && selectedSortBy.has(sort) ? 'white' : 'black'
                                    }}
                                    onClick={() => {
                                        let temp = new Set(selectedSortBy);
                                        selectedSortBy ? (!selectedSortBy.has(sort) ?
                                            temp.add(sort)
                                            : temp.delete(sort)) : '';
                                        setSelectedSortBy(temp);
                                    }}>
                                    {sort}
                                </div>
                            )
                        })}
                    </div>
                </div> */}
            </div>
        </motion.div>
    )
}